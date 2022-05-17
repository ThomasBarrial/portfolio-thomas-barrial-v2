/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import React, {
    useRef,
    useState,
    useCallback,
    ReactChild,
    useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    useViewportScroll,
    useTransform,
    useSpring,
    motion,
} from "framer-motion";

function SmoothScrollComponent({
    children,
}: {
    children: ReactChild;
}): JSX.Element {
    const scrollRef = useRef(null);

    const [pageHeight, setPageHeight] = useState(0);

    const resizePageHeight = useCallback((entries) => {
        for (const entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizePageHeight(entries),
        );
        scrollRef &&
            resizeObserver.observe(scrollRef.current as unknown as Element);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    const { scrollY } = useViewportScroll();
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{ y: spring }}
                className="scroll-container"
            >
                {children}
            </motion.div>
            <div style={{ height: pageHeight }} />
        </>
    );
}

export default SmoothScrollComponent;

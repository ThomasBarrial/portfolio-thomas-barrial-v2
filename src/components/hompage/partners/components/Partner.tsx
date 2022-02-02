import React from 'react';

interface IProps {
  item: IPartner;
}

function Partner({ item }: IProps) {
  return (
    <div>
      <h4 className="font-bold text-xl">{item.name}</h4>
      <p className="mt-2 flex items-center lg:min-h-textpartner mb-8">{item.text}</p>
      <a
        className="bg-transparent z-40 transform   duration-500 hover:border-blue hover:text-blue  text-xs lg:text-base rounded-md border px-10 py-2"
        href={item.link}
        target={'_blank'}
        rel="noreferrer">
        Voir le site
      </a>
    </div>
  );
}

export default Partner;

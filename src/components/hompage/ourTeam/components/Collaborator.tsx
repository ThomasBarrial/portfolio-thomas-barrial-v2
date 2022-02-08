import React from 'react';
import SocialMedia from './SocialMedia';

interface IProps {
  item: ICollaborator;
}

function Collaborator({ item }: IProps): JSX.Element {
  return (
    <div className="h-52 w-40 lg:w-40 mx-2 lg:mx-5 my-2 overflow-hidden rounded-md text-left">
      <div
        className="h-full w-full transform duration-700  hover:scale-110"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="p-2 flex flex-col justify-end h-full transform duration-700  hover:scale-90">
          <div className="flex mt-2">
            {item.socialLinks.map((sm) => (
              <div key={sm.icon}>
                <SocialMedia sm={sm} />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold">{item.name}</p>
            <p className="text-xxs">{item.profilTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaborator;

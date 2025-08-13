import user1 from 'src/assets/images/profile/ryan.png';
import user2 from 'src/assets/images/profile/emily.png';

import user4 from 'src/assets/images/profile/Kiley.png';
import user5 from 'src/assets/images/profile/Reva.png';
import user6 from 'src/assets/images/profile/olivia.png';
import user7 from 'src/assets/images/profile/Dalton.png';
import user8 from 'src/assets/images/profile/jason.png';
import user9 from 'src/assets/images/profile/Janita.png';
import CardBox from 'src/components/shared/CardBox';

const photos = [
  {
    cardimage: user1,
    id: 1,
  },
  {
    cardimage: user2,
    id: 2,
  },
  {
    cardimage: user1,
    id: 3,
  },
  {
    cardimage: user4,
    id: 4,
  },
  {
    cardimage: user5,
    id: 5,
  },
  {
    cardimage: user6,
    id: 6,
  },
  {
    cardimage: user7,
    id: 7,
  },
  {
    cardimage: user8,
    id: 8,
  },
  {
    cardimage: user9,
    id: 9,
  },
];

const Photos = () => {
  return (
    <>
      <CardBox>
        <h5 className="card-title mb-2">Photos</h5>
        <div className="grid grid-cols-12 gap-5">
          {photos.map((photo) => (
            <div key={photo.id} className="md:col-span-4 sm:col-span-6 col-span-4">
              <img src={photo.cardimage} alt="profile" className="rounded-md w-full" />
            </div>
          ))}
        </div>
      </CardBox>
    </>
  );
};

export default Photos;

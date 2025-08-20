import { listItems } from "../utils/constants";

const BannerList = () => {
  return (
    <ul className="lg:pr-20 my-3 md:my-5 text-start md:text-center lg:text-start">
      {listItems.map((item) => (
        <li
          className="font-semibold my-2 md:my-3 leading-[1.375rem] text-base inline-flex items-center"
          key={item.id}
        >
          <div className="mr-3">✨</div> <h1>{item.text}</h1>
        </li>
      ))}
    </ul>
  );
};

export default BannerList;

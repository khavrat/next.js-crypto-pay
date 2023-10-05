export const Navigation = () => {
  return (
    <ul className="max-md:hidden flex gap-[32px]">
      <li>
        <a href="#" className="inline-block py-3 text-textColor hover:text-blueColor text-p lg:text-pp">
          Use cases
        </a>
      </li>
      <li>
        <a href="#" className="inline-block py-3 text-textColor hover:text-blueColor text-p lg:text-pp">
          Features
        </a>
      </li>
      <li>
        <a href="#" className="inline-block py-3 text-textColor hover:text-blueColor text-p lg:text-pp">
          How to start
        </a>
      </li>
    </ul>
  );
};

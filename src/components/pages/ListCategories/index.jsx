import { IoFilterSharp } from 'react-icons/io5';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import CardCategory from '@/components/parts/CardCategory';
import Navbar from '@/components/parts/Navbar';
import Sidebar from '@/components/parts/Sidebar';

function ListCategories() {
  return (
    <main className="category-page relative h-screen bg-bgg font-poppins">
      <Navbar />
      <Sidebar />
      <div className="category-title flex justify-center pt-24">
        <h1 className="text-4xl font-semibold text-tertiary xl:font-bold">Categories</h1>
      </div>
      <div className="container-btn-category absolute right-9 mt-10">
        <div className="button-categories flex items-center">
          <label className="input input-bordered  flex h-8 items-center gap-2 border-tertiary">
            <input
              type="text"
              className="grow text-sm text-secondary placeholder:text-secondary"
              placeholder="Search category..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 text-tertiary"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="btn-filter ml-5 cursor-pointer hover:bg-secondary p-1 rounded-lg">
            <IoFilterSharp className="text-3xl text-secondary hover:text-white" />
          </div>
        </div>
      </div>
      <div className="container-products mt-24 grid grid-cols-2 gap-4 p-4 md:ml-20 md:grid-cols-3 xl:grid-cols-5">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
      <div className="container-pagination flex items-center justify-center pb-10 ">
        <div className="button-pagination">
          <MdKeyboardArrowLeft className="text-2xl" />
        </div>
        <div className="join">
          <button className="btn join-item">1</button>
          <button className="btn join-item">2</button>
          <button className="btn join-item">3</button>
          <button className="btn join-item">4</button>
        </div>
        <div className="button-pagination">
          <MdKeyboardArrowRight className="text-2xl" />
        </div>
      </div>
    </main>
  );
}

export default ListCategories;

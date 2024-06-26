import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Pagination({ totalPage, currentPage, onClick }) {
  const MAX_BUTTON = 5;
  const HALF = Math.ceil(MAX_BUTTON / 2);
  const pages = [];

  let startPage = Math.max(1, currentPage - HALF + 1);
  const endPage = Math.min(totalPage, startPage + MAX_BUTTON - 1);

  if (endPage - startPage + 1 < MAX_BUTTON) startPage = Math.max(1, endPage - MAX_BUTTON + 1);

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }

  if (!totalPage || !currentPage || totalPage <= 1) return null;

  return totalPage > 1 ? (
    <div className="container-pagination flex items-center justify-center md:pb-10 pb-24 ">
      {startPage !== 1 ? (
        <div className="button-pagination">
          <MdKeyboardArrowLeft className="text-2xl" />
        </div>
      ) : (
        ''
      )}
      <div className="join">
        {pages.map((i) => (
          <button
            key={i}
            className={`btn bg-bgColor text-txt join-item ${
              i === currentPage ? 'btn-active bg-tertiary' : ''
            }`}
            onClick={() => {
              onClick(i);
            }}
          >
            {i}
          </button>
        ))}
      </div>
      {endPage !== totalPage ? (
        <div className="button-pagination">
          <MdKeyboardArrowRight className="text-2xl" />
        </div>
      ) : (
        ''
      )}
    </div>
  ) : null;
}

export default Pagination;

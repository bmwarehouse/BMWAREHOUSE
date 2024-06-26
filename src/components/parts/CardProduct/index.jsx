/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';

// import SusuBayik from '@/assets/images/susu-bayik.png';
import Link from 'next/link';

import formatRupiah from '@/lib/formatRupiah';

function CardProduct({ product }) {
  if (!product) {
    return null;
  }
  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-30 card mb-10 h-64 cursor-pointer bg-primary shadow-xl text-txt hover:drop-shadow-2xl md:h-80 xl:w-60">
        <figure className="h-3/5">
          <img src={product.imageUrl} alt={product.name} />
        </figure>
        <div className="card-body gap-0 px-6 py-2">
          <h2 className="card-title text-sm md:text-base">{product.name}</h2>
          <p className="m-0 text-xs md:text-sm">{formatRupiah(product.price)}</p>
          <div className="card-actions mt-2 justify-center">
            {product.productCategories &&
              product.productCategories.map((ctg) => (
                <div
                  key={ctg.category.id}
                  className="badge badge-outline text-[0.5rem] md:text-[0.7rem]"
                >
                  {ctg.category.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardProduct;

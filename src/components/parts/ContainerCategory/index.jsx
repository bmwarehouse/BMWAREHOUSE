'use client';

import CardCategory from '@/components/parts/CardCategory';

function ContainerCategory({ categoriesData }) {
  if (!categoriesData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-products mt-4 grid grid-cols gap-4 p-4 md:ml-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {categoriesData.map((category) => (
        <CardCategory key={category.id} category={category} />
      ))}
    </div>
  );
}

export default ContainerCategory;

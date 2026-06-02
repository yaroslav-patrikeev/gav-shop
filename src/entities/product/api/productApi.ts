import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Product } from "../model/types";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Неубиваемый Пуллер",
    price: 1200,
    category: "large",
    description:
      "Два прочных фиолетовых кольца для тренировок, прыжков и перетягивания.",
    imageUrl: "https://m.media-amazon.com/images/I/71+ESBR8fvL._AC_SL1500_.jpg",
  },
  {
    id: "2",
    name: "Мяч для апортировки",
    price: 500,
    category: "medium",
    description:
      "Яркий текстурный резиновый мяч, который отлично прыгает и не тонет в воде.",
    // Ссылка на резиновый мяч для собак
    imageUrl: "https://m.media-amazon.com/images/I/71Zxz4R7C6L._AC_SX679_.jpg",
  },
  {
    id: "3",
    name: "Пищащий мягкий лев",
    price: 450,
    category: "small",
    description:
      "Плюшевая игрушка-лев с защищенной пищалкой внутри. Для уютных игр.",
    // Ссылка на плюшевую игрушку
    imageUrl: "https://gigwi.ru/img/items/77/75103_1.jpg",
  },
  {
    id: "4",
    name: "Толстый канат-грейфер",
    price: 750,
    category: "large",
    description:
      "Прочный хлопковый канат с узлами для чистки зубов и массажа десен.",
    imageUrl: "https://m.media-amazon.com/images/I/61Er0zbYrhL._AC_SL1500_.jpg",
  },
];

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string | void>({
      queryFn: async (category) => {
        await new Promise((resolve) => setTimeout(resolve, 200));
        if (category) {
          return { data: MOCK_PRODUCTS.filter((p) => p.category === category) };
        }
        return { data: MOCK_PRODUCTS };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;

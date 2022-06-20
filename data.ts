export type IProps = {
  blogs: {
    title: string;
    body: string;
    author: string;
    id: number;
  }[];
  title?: string;
};

const Props = [
  { title: "boobies", body: "odyodyody", author: "me", id: 0 },
  { title: "butts", body: "thiccums", author: "seymour", id: 1 },
  { title: "beavers", body: "dam!", author: "Mr Beaver", id: 2 },
];

export default Props;

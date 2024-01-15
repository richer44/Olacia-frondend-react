export interface LatestUpdateBoxProps {
  item: LatestBlog;
}

export type LatestBlog = {
  title: string;
  subTitle: string;
  description: string;
  linkText: string;
  link: string;
  image: string;
};

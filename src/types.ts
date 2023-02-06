export interface SlideItem {
  id: number;
  imageUrl: string;
  title: string;
}

export interface Slide {
  id: number;
  label: string;
  slides: SlideItem[];
}

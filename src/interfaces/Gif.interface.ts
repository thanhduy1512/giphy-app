export interface IImage {
  height: string;
  size: string;
  url: string;
  width: string;
}
export interface IGiphy {
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: {
    downsized: IImage;
    downsized_large: IImage;
    downsized_medium: IImage;
    downsized_still: IImage;
    fixed_height: IImage;
    fixed_height_downsampled: IImage;
    fixed_height_small: IImage;
    fixed_height_small_still: IImage;
    fixed_height_still: IImage;
    fixed_width: IImage;
    fixed_width_downsampled: IImage;
    fixed_width_small: IImage;
    fixed_width_small_still: IImage;
    fixed_width_still: IImage;
    looping: IImage;
    original: IImage;
    original_mp4: IImage;
    original_still: IImage;
    preview: IImage;
    preview_gif: IImage;
    preview_webp: IImage;
  };
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
  user: {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    description: string;
    display_name: string;
    instagram_url: string;
    is_verified: boolean;
    profile_url: string;
    username: string;
    website_url: string;
  };
}

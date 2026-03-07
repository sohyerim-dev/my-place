export interface Profile {
  id: string
  username: string
  avatar_url: string | null
  bio: string | null
  created_at: string
}

export interface Place {
  id: string
  name: string
  address: string | null
  location: { lat: number; lng: number }
  category: '카페' | '식당' | '바' | '공원' | '전시' | '쇼핑' | '기타'
  naver_place_url: string | null
  created_by: string | null
  created_at: string
}

export interface Post {
  id: string
  user_id: string
  place_id: string
  content: string | null
  created_at: string
  updated_at: string
  // 조인 데이터
  profiles?: Profile
  places?: Place
  post_images?: PostImage[]
  post_tags?: { tags: Tag }[]
  likes_count?: number
  saves_count?: number
  is_liked?: boolean
  is_saved?: boolean
}

export interface PostImage {
  id: string
  post_id: string
  image_url: string
  display_order: number
}

export interface Tag {
  id: string
  name: string
}

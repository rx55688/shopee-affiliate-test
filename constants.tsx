
import React from 'react';
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'tech', name: '3C 數位', icon: '📱' },
  { id: 'home', name: '居家生活', icon: '🏠' },
  { id: 'fashion', name: '流行服飾', icon: '👕' },
  { id: 'beauty', name: '美妝護理', icon: '💄' },
  { id: 'food', name: '美食零嘴', icon: '🍪' },
  { id: 'sports', name: '運動戶外', icon: '🚴' },
  { id: 'baby', name: '母嬰用品', icon: '👶' },
  { id: 'book', name: '圖書文具', icon: '📚' },
  { id: 'pet', name: '寵物用品', icon: '🐾' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, title: '極簡設計無線藍牙耳機', price: 1280, originalPrice: 1980, rating: 4.8, image: 'https://picsum.photos/seed/tech1/400/400', category: 'tech' },
  { id: 2, title: '北歐風香氛融蠟燈', price: 899, originalPrice: 1200, rating: 4.9, image: 'https://picsum.photos/seed/home1/400/400', category: 'home' },
  { id: 3, title: '韓系顯瘦棉質寬褲', price: 450, originalPrice: 690, rating: 4.5, image: 'https://picsum.photos/seed/fashion1/400/400', category: 'fashion' },
  { id: 4, title: '深層保濕精華液 50ml', price: 1580, originalPrice: 2100, rating: 4.7, image: 'https://picsum.photos/seed/beauty1/400/400', category: 'beauty' },
  { id: 5, title: '手工減糖曲奇餅禮盒', price: 320, originalPrice: 450, rating: 4.6, image: 'https://picsum.photos/seed/food1/400/400', category: 'food' },
  { id: 6, title: '專業級瑜珈防滑墊', price: 680, originalPrice: 980, rating: 4.8, image: 'https://picsum.photos/seed/sports1/400/400', category: 'sports' },
  { id: 7, title: '矽膠防漏幼兒學習杯', price: 290, originalPrice: 380, rating: 4.9, image: 'https://picsum.photos/seed/baby1/400/400', category: 'baby' },
  { id: 8, title: '全效能寵物乾糧 5kg', price: 850, originalPrice: 1100, rating: 4.7, image: 'https://picsum.photos/seed/pet1/400/400', category: 'pet' },
  { id: 9, title: '高畫質便攜式投影機', price: 4200, originalPrice: 5900, rating: 4.4, image: 'https://picsum.photos/seed/tech2/400/400', category: 'tech' },
];

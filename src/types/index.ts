export type UserRole = 'student' | 'teacher' | 'admin';
export type AgeGroup = '10-12' | '13-15' | '16-18';
export type EnglishLevel = 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced';
export type ClassType = 'Individual' | 'Group' | 'Assessment' | 'Trial';
export type ClassStatus = 'scheduled' | 'completed' | 'cancelled' | 'no-show';
export type PackageType = 'credit_bundle' | 'family' | 'trial_combo' | 'seasonal' | 'custom';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type InvoiceStatus = 'paid' | 'pending' | 'cancelled' | 'refunded' | 'overdue';

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  phone?: string;
  role: UserRole;
  isTrial: boolean;
  trialCompleted?: boolean;
  avatarUrl?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Student {
  id: string;
  userId: string;
  name: string;
  age?: number;
  ageGroup: AgeGroup;
  englishLevel: EnglishLevel;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  isTrial: boolean;
  trialStartedAt?: string;
  trialEndedAt?: string;
  convertedToRegular: boolean;
  convertedAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Class {
  id: string;
  studentId: string;
  teacherId: string;
  classType: ClassType;
  ageGroup: AgeGroup;
  date: string;
  time: string;
  duration: number;
  meetingLink?: string;
  status: ClassStatus;
  price?: number;
  creditsUsed?: number;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
  student?: Student;
  teacher?: User;
}

export interface Package {
  id: string;
  name: string;
  nameAr: string;
  description?: string;
  descriptionAr?: string;
  packageType: PackageType;
  credits: number;
  price: number;
  discountPrice?: number;
  discountPercentage?: number;
  validityDays?: number;
  maxStudents: number;
  includesTrial: boolean;
  trialClasses: number;
  regularClasses: number;
  features: string[];
  isFeatured: boolean;
  isBestseller: boolean;
  isSeasonal: boolean;
  seasonalStart?: string;
  seasonalEnd?: string;
  displayOrder: number;
  status: 'active' | 'inactive' | 'archived' | 'coming_soon';
  imageUrl?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Credits {
  id: string;
  userId: string;
  credits: number;
  trialCredits: number;
  totalEarned: number;
  totalSpent: number;
  lastUpdated: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  titleAr?: string;
  message: string;
  messageAr?: string;
  link?: string;
  isRead: boolean;
  readAt?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  studentId: string;
  teacherId: string;
  classId?: string;
  rating: number;
  comment?: string;
  commentAr?: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt?: string;
  student?: Student;
}

export interface DashboardStats {
  totalStudents: number;
  trialStudents: number;
  regularStudents: number;
  totalClasses: number;
  upcomingClasses: number;
  completedClasses: number;
  totalRevenue: number;
  monthlyRevenue: number;
  averageRating: number;
  totalReviews: number;
}

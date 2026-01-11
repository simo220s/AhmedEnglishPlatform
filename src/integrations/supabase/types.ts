export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      classes: {
        Row: {
          age_group: Database["public"]["Enums"]["age_group"]
          class_type: Database["public"]["Enums"]["class_type"]
          created_at: string | null
          credits_used: number | null
          duration: number
          id: string
          meeting_link: string | null
          notes: string | null
          price: number | null
          scheduled_date: string
          scheduled_time: string
          status: Database["public"]["Enums"]["class_status"]
          student_id: string
          teacher_id: string | null
          updated_at: string | null
        }
        Insert: {
          age_group: Database["public"]["Enums"]["age_group"]
          class_type?: Database["public"]["Enums"]["class_type"]
          created_at?: string | null
          credits_used?: number | null
          duration?: number
          id?: string
          meeting_link?: string | null
          notes?: string | null
          price?: number | null
          scheduled_date: string
          scheduled_time: string
          status?: Database["public"]["Enums"]["class_status"]
          student_id: string
          teacher_id?: string | null
          updated_at?: string | null
        }
        Update: {
          age_group?: Database["public"]["Enums"]["age_group"]
          class_type?: Database["public"]["Enums"]["class_type"]
          created_at?: string | null
          credits_used?: number | null
          duration?: number
          id?: string
          meeting_link?: string | null
          notes?: string | null
          price?: number | null
          scheduled_date?: string
          scheduled_time?: string
          status?: Database["public"]["Enums"]["class_status"]
          student_id?: string
          teacher_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "classes_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classes_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      credits: {
        Row: {
          credits: number | null
          id: string
          last_updated: string | null
          total_earned: number | null
          total_spent: number | null
          trial_credits: number | null
          user_id: string
        }
        Insert: {
          credits?: number | null
          id?: string
          last_updated?: string | null
          total_earned?: number | null
          total_spent?: number | null
          trial_credits?: number | null
          user_id: string
        }
        Update: {
          credits?: number | null
          id?: string
          last_updated?: string | null
          total_earned?: number | null
          total_spent?: number | null
          trial_credits?: number | null
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          link: string | null
          message: string
          message_ar: string | null
          read_at: string | null
          title: string
          title_ar: string | null
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          link?: string | null
          message: string
          message_ar?: string | null
          read_at?: string | null
          title: string
          title_ar?: string | null
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          link?: string | null
          message?: string
          message_ar?: string | null
          read_at?: string | null
          title?: string
          title_ar?: string | null
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      packages: {
        Row: {
          created_at: string | null
          credits: number
          description: string | null
          description_ar: string | null
          discount_percentage: number | null
          discount_price: number | null
          display_order: number | null
          features: string[] | null
          id: string
          image_url: string | null
          includes_trial: boolean | null
          is_bestseller: boolean | null
          is_featured: boolean | null
          is_seasonal: boolean | null
          max_students: number | null
          name: string
          name_ar: string
          package_type: Database["public"]["Enums"]["package_type"]
          price: number
          regular_classes: number | null
          seasonal_end: string | null
          seasonal_start: string | null
          status: Database["public"]["Enums"]["package_status"] | null
          trial_classes: number | null
          updated_at: string | null
          validity_days: number | null
        }
        Insert: {
          created_at?: string | null
          credits?: number
          description?: string | null
          description_ar?: string | null
          discount_percentage?: number | null
          discount_price?: number | null
          display_order?: number | null
          features?: string[] | null
          id?: string
          image_url?: string | null
          includes_trial?: boolean | null
          is_bestseller?: boolean | null
          is_featured?: boolean | null
          is_seasonal?: boolean | null
          max_students?: number | null
          name: string
          name_ar: string
          package_type?: Database["public"]["Enums"]["package_type"]
          price: number
          regular_classes?: number | null
          seasonal_end?: string | null
          seasonal_start?: string | null
          status?: Database["public"]["Enums"]["package_status"] | null
          trial_classes?: number | null
          updated_at?: string | null
          validity_days?: number | null
        }
        Update: {
          created_at?: string | null
          credits?: number
          description?: string | null
          description_ar?: string | null
          discount_percentage?: number | null
          discount_price?: number | null
          display_order?: number | null
          features?: string[] | null
          id?: string
          image_url?: string | null
          includes_trial?: boolean | null
          is_bestseller?: boolean | null
          is_featured?: boolean | null
          is_seasonal?: boolean | null
          max_students?: number | null
          name?: string
          name_ar?: string
          package_type?: Database["public"]["Enums"]["package_type"]
          price?: number
          regular_classes?: number | null
          seasonal_end?: string | null
          seasonal_start?: string | null
          status?: Database["public"]["Enums"]["package_status"] | null
          trial_classes?: number | null
          updated_at?: string | null
          validity_days?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          first_name: string | null
          full_name: string | null
          id: string
          is_trial: boolean | null
          last_name: string | null
          phone: string | null
          trial_completed: boolean | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          first_name?: string | null
          full_name?: string | null
          id: string
          is_trial?: boolean | null
          last_name?: string | null
          phone?: string | null
          trial_completed?: boolean | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          first_name?: string | null
          full_name?: string | null
          id?: string
          is_trial?: boolean | null
          last_name?: string | null
          phone?: string | null
          trial_completed?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      purchases: {
        Row: {
          amount: number
          coupon_code: string | null
          created_at: string | null
          credits_purchased: number
          discount_amount: number | null
          id: string
          invoice_number: string | null
          invoice_status: Database["public"]["Enums"]["invoice_status"] | null
          package_id: string | null
          payment_method: string | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          transaction_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          coupon_code?: string | null
          created_at?: string | null
          credits_purchased?: number
          discount_amount?: number | null
          id?: string
          invoice_number?: string | null
          invoice_status?: Database["public"]["Enums"]["invoice_status"] | null
          package_id?: string | null
          payment_method?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          transaction_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          coupon_code?: string | null
          created_at?: string | null
          credits_purchased?: number
          discount_amount?: number | null
          id?: string
          invoice_number?: string | null
          invoice_status?: Database["public"]["Enums"]["invoice_status"] | null
          package_id?: string | null
          payment_method?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          transaction_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchases_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          class_id: string | null
          comment: string | null
          comment_ar: string | null
          created_at: string | null
          id: string
          is_approved: boolean | null
          rating: number
          student_id: string
          teacher_id: string
          updated_at: string | null
        }
        Insert: {
          class_id?: string | null
          comment?: string | null
          comment_ar?: string | null
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          rating: number
          student_id: string
          teacher_id: string
          updated_at?: string | null
        }
        Update: {
          class_id?: string | null
          comment?: string | null
          comment_ar?: string | null
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          rating?: number
          student_id?: string
          teacher_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      scheduled_emails: {
        Row: {
          created_at: string | null
          email_type: string
          error_message: string | null
          id: string
          recipient_email: string
          scheduled_for: string
          sent_at: string | null
          status: string
          trial_booking_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email_type: string
          error_message?: string | null
          id?: string
          recipient_email: string
          scheduled_for: string
          sent_at?: string | null
          status?: string
          trial_booking_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email_type?: string
          error_message?: string | null
          id?: string
          recipient_email?: string
          scheduled_for?: string
          sent_at?: string | null
          status?: string
          trial_booking_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_emails_trial_booking_id_fkey"
            columns: ["trial_booking_id"]
            isOneToOne: false
            referencedRelation: "trial_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          age: number | null
          age_group: Database["public"]["Enums"]["age_group"]
          converted_at: string | null
          converted_to_regular: boolean | null
          created_at: string | null
          english_level: Database["public"]["Enums"]["english_level"]
          id: string
          is_trial: boolean | null
          name: string
          notes: string | null
          parent_email: string | null
          parent_name: string | null
          parent_phone: string | null
          renewal_reminder_sent_at: string | null
          trial_ended_at: string | null
          trial_started_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          age?: number | null
          age_group: Database["public"]["Enums"]["age_group"]
          converted_at?: string | null
          converted_to_regular?: boolean | null
          created_at?: string | null
          english_level?: Database["public"]["Enums"]["english_level"]
          id?: string
          is_trial?: boolean | null
          name: string
          notes?: string | null
          parent_email?: string | null
          parent_name?: string | null
          parent_phone?: string | null
          renewal_reminder_sent_at?: string | null
          trial_ended_at?: string | null
          trial_started_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          age?: number | null
          age_group?: Database["public"]["Enums"]["age_group"]
          converted_at?: string | null
          converted_to_regular?: boolean | null
          created_at?: string | null
          english_level?: Database["public"]["Enums"]["english_level"]
          id?: string
          is_trial?: boolean | null
          name?: string
          notes?: string | null
          parent_email?: string | null
          parent_name?: string | null
          parent_phone?: string | null
          renewal_reminder_sent_at?: string | null
          trial_ended_at?: string | null
          trial_started_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      teacher_calendars: {
        Row: {
          access_token: string | null
          calendar_id: string | null
          connected_at: string | null
          created_at: string | null
          id: string
          is_connected: boolean
          last_synced_at: string | null
          provider: string
          refresh_token: string | null
          teacher_id: string
          token_expires_at: string | null
          updated_at: string | null
        }
        Insert: {
          access_token?: string | null
          calendar_id?: string | null
          connected_at?: string | null
          created_at?: string | null
          id?: string
          is_connected?: boolean
          last_synced_at?: string | null
          provider?: string
          refresh_token?: string | null
          teacher_id: string
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Update: {
          access_token?: string | null
          calendar_id?: string | null
          connected_at?: string | null
          created_at?: string | null
          id?: string
          is_connected?: boolean
          last_synced_at?: string | null
          provider?: string
          refresh_token?: string | null
          teacher_id?: string
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_calendars_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teachers: {
        Row: {
          availability: Json | null
          bio: string | null
          bio_ar: string | null
          created_at: string | null
          experience_years: number | null
          hourly_rate: number | null
          id: string
          is_active: boolean | null
          name: string
          rating: number | null
          specialties: string[] | null
          total_reviews: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          availability?: Json | null
          bio?: string | null
          bio_ar?: string | null
          created_at?: string | null
          experience_years?: number | null
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          rating?: number | null
          specialties?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          availability?: Json | null
          bio?: string | null
          bio_ar?: string | null
          created_at?: string | null
          experience_years?: number | null
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          rating?: number | null
          specialties?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      trial_bookings: {
        Row: {
          age_group: string
          created_at: string
          email: string
          english_level: string
          id: string
          meeting_link: string | null
          parent_name: string | null
          phone: string
          scheduled_date: string
          scheduled_time: string
          status: string
          student_name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          age_group: string
          created_at?: string
          email: string
          english_level: string
          id?: string
          meeting_link?: string | null
          parent_name?: string | null
          phone: string
          scheduled_date: string
          scheduled_time: string
          status?: string
          student_name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          age_group?: string
          created_at?: string
          email?: string
          english_level?: string
          id?: string
          meeting_link?: string | null
          parent_name?: string | null
          phone?: string
          scheduled_date?: string
          scheduled_time?: string
          status?: string
          student_name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_credits_to_student: {
        Args: { p_credits: number; p_notes?: string; p_student_id: string }
        Returns: Json
      }
      book_class: {
        Args: {
          p_class_type: string
          p_duration: number
          p_notes?: string
          p_scheduled_date: string
          p_scheduled_time: string
          p_teacher_id: string
        }
        Returns: Json
      }
      cancel_class: { Args: { p_class_id: string }; Returns: Json }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      teacher_book_class: {
        Args: {
          p_class_type: string
          p_duration: number
          p_notes?: string
          p_scheduled_date: string
          p_scheduled_time: string
          p_student_id: string
        }
        Returns: Json
      }
    }
    Enums: {
      age_group: "10-12" | "13-15" | "16-18"
      app_role: "student" | "teacher" | "admin"
      class_status: "scheduled" | "completed" | "cancelled" | "no-show"
      class_type: "Individual" | "Group" | "Assessment" | "Trial"
      english_level: "Beginner" | "Elementary" | "Intermediate" | "Advanced"
      invoice_status: "paid" | "pending" | "cancelled" | "refunded" | "overdue"
      package_status: "active" | "inactive" | "archived" | "coming_soon"
      package_type:
        | "credit_bundle"
        | "family"
        | "trial_combo"
        | "seasonal"
        | "custom"
      payment_status: "pending" | "completed" | "failed" | "refunded"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      age_group: ["10-12", "13-15", "16-18"],
      app_role: ["student", "teacher", "admin"],
      class_status: ["scheduled", "completed", "cancelled", "no-show"],
      class_type: ["Individual", "Group", "Assessment", "Trial"],
      english_level: ["Beginner", "Elementary", "Intermediate", "Advanced"],
      invoice_status: ["paid", "pending", "cancelled", "refunded", "overdue"],
      package_status: ["active", "inactive", "archived", "coming_soon"],
      package_type: [
        "credit_bundle",
        "family",
        "trial_combo",
        "seasonal",
        "custom",
      ],
      payment_status: ["pending", "completed", "failed", "refunded"],
    },
  },
} as const

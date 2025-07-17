export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      comites: {
        Row: {
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
        }
        Insert: {
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
        }
        Update: {
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      informes_transparencia: {
        Row: {
          anio: number
          created_at: string
          fecha_publicacion: string
          id: string
          mes: number
          publicado_por: string | null
          resumen_gastos: number
          resumen_ingresos: number
          saldo_final: number
          url_documento: string | null
        }
        Insert: {
          anio: number
          created_at?: string
          fecha_publicacion: string
          id?: string
          mes: number
          publicado_por?: string | null
          resumen_gastos: number
          resumen_ingresos: number
          saldo_final: number
          url_documento?: string | null
        }
        Update: {
          anio?: number
          created_at?: string
          fecha_publicacion?: string
          id?: string
          mes?: number
          publicado_por?: string | null
          resumen_gastos?: number
          resumen_ingresos?: number
          saldo_final?: number
          url_documento?: string | null
        }
        Relationships: []
      }
      perfiles: {
        Row: {
          id: string
          id_comite: string | null
          nombre_completo: string | null
          rol: string
          updated_at: string
        }
        Insert: {
          id: string
          id_comite?: string | null
          nombre_completo?: string | null
          rol?: string
          updated_at?: string
        }
        Update: {
          id?: string
          id_comite?: string | null
          nombre_completo?: string | null
          rol?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "perfiles_id_comite_fkey"
            columns: ["id_comite"]
            isOneToOne: false
            referencedRelation: "comites"
            referencedColumns: ["id"]
          },
        ]
      }
      transacciones: {
        Row: {
          categoria_gasto: Database["public"]["Enums"]["categoria_gasto"] | null
          categoria_ingreso:
            | Database["public"]["Enums"]["categoria_ingreso"]
            | null
          created_at: string
          descripcion: string | null
          fecha: string
          id: string
          id_comite: string | null
          id_usuario_registro: string | null
          monto: number
          tipo: Database["public"]["Enums"]["tipo_transaccion"]
        }
        Insert: {
          categoria_gasto?:
            | Database["public"]["Enums"]["categoria_gasto"]
            | null
          categoria_ingreso?:
            | Database["public"]["Enums"]["categoria_ingreso"]
            | null
          created_at?: string
          descripcion?: string | null
          fecha: string
          id?: string
          id_comite?: string | null
          id_usuario_registro?: string | null
          monto: number
          tipo: Database["public"]["Enums"]["tipo_transaccion"]
        }
        Update: {
          categoria_gasto?:
            | Database["public"]["Enums"]["categoria_gasto"]
            | null
          categoria_ingreso?:
            | Database["public"]["Enums"]["categoria_ingreso"]
            | null
          created_at?: string
          descripcion?: string | null
          fecha?: string
          id?: string
          id_comite?: string | null
          id_usuario_registro?: string | null
          monto?: number
          tipo?: Database["public"]["Enums"]["tipo_transaccion"]
        }
        Relationships: [
          {
            foreignKeyName: "transacciones_id_comite_fkey"
            columns: ["id_comite"]
            isOneToOne: false
            referencedRelation: "comites"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      categoria_gasto:
        | "servicios_basicos"
        | "mantenimiento"
        | "ayuda_social"
        | "materiales"
        | "eventos"
      categoria_ingreso:
        | "diezmo"
        | "ofrenda"
        | "donacion_especial"
        | "actividad"
      tipo_transaccion: "ingreso" | "gasto"
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
      categoria_gasto: [
        "servicios_basicos",
        "mantenimiento",
        "ayuda_social",
        "materiales",
        "eventos",
      ],
      categoria_ingreso: [
        "diezmo",
        "ofrenda",
        "donacion_especial",
        "actividad",
      ],
      tipo_transaccion: ["ingreso", "gasto"],
    },
  },
} as const

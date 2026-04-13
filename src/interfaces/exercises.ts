 interface Activity {
  id: string;
  type: string;
  layout: string;
  statement: string;
  description?: string;
  activity_data: any | null;
  file_content?: {
    type: string;
    src: string;
  }
}

interface exerciseBlock {
  ponderation: number;
  type: string;
  activities: Activity[];
}

export type { Activity, exerciseBlock };
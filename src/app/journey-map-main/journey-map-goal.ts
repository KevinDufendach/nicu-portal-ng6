export interface JourneyMapGoal {
  text?: string;
  img_uri?: string;
  img_url_tile_alt?: string;
  mat_icon?: string;
  svg_icon?: string;
  goal_group?: number;
  completed?: boolean;
  id?: number;
  cols: number;
  rows: number;
  color?: string;
}

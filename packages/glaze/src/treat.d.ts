import { Theme as GlazeTheme } from 'glaze';

declare module 'treat/theme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends GlazeTheme {}
}

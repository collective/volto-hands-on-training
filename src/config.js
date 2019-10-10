/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  tiles as defaultTiles,
} from '@plone/volto/config';

import { defineMessages } from 'react-intl';

import MainSliderViewBlock from '@package/components/Blocks/MainSlider/View';
import MainSliderEditBlock from '@package/components/Blocks/MainSlider/Edit';
import SuccessStory from '@package/components/Views/SuccessStory';
import sliderSVG from '@plone/volto/icons/slider.svg';

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
  contentTypesViews: {
    ...defaultViews.contentTypesViews,
    success_story: SuccessStory,
  },
};

export const widgets = {
  ...defaultWidgets,
};

defineMessages({
  mainslider: {
    id: 'Main Slider',
    defaultMessage: 'Main Slider',
  },
});

const customTiles = {
  mainslider: {
    id: 'mainslider',
    title: 'Main Slider',
    icon: sliderSVG,
    group: 'common',
    view: MainSliderViewBlock,
    edit: MainSliderEditBlock,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
};

export const tiles = {
  ...defaultTiles,
  requiredTiles: [],
  tilesConfig: { ...defaultTiles.tilesConfig, ...customTiles },
};

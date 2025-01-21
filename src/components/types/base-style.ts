// packages
import React from 'react';
import styled from '@emotion/styled';
// types
import { BaseStyledDisplayProps } from './base-styled-display';
import { BaseStyledSpacingProps } from './base-styled-spacing';
import { BaseStyledSizeProps } from './base-styled-size';
import { BaseStyledPositionProps } from './base-styled-position';
import { BaseStyledRadiiProps } from './base-styled-radii';
import { BaseStyledAppearProps } from './base-styled-appear';
import { BaseStyledFlexProps } from './base-styled-flex';
import { BaseStyledImageProps } from './base-styled-image';
import { BaseProps } from './base';

export interface BaseStyleProps extends
BaseStyledDisplayProps,
BaseStyledSpacingProps,
BaseStyledSizeProps,
BaseStyledPositionProps,
BaseStyledRadiiProps,
BaseStyledAppearProps,
BaseStyledFlexProps,
BaseStyledImageProps,
BaseProps {}
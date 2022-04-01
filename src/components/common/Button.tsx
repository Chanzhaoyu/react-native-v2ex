import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps as NativeTouchableOpacityProps,
  ViewStyle,
  TextStyle
} from 'react-native'
import { Text } from './Text'
import { useTheme, ITheme } from '@src/theme'

export interface TouchableOpacityProps extends NativeTouchableOpacityProps {
  disabled?: boolean
  type?: 'large' | 'small'
}

const Button = ({ onPress, children, style, disabled = false, type = 'large' }: TouchableOpacityProps) => {
  const { theme } = useTheme()

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle(theme, type, disabled), style]} disabled={disabled}>
      <Text style={styles.buttonTitle(theme, type, disabled)}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: (_theme: ITheme, type: 'large' | 'small', disabled: boolean): ViewStyle =>
    type === 'large'
      ? {
          borderWidth: 1,
          backgroundColor: disabled ? _theme.colors.secondaryLight : _theme.colors.secondary,
          borderColor: disabled ? _theme.colors.secondaryLight : _theme.colors.secondary,
          width: _theme.dimens.defaultButtonWidth,
          height: _theme.dimens.defaultButtonHeight,
          justifyContent: 'center',
          borderRadius: _theme.dimens.defaultButtonRadius
        }
      : {
          borderWidth: 1,
          borderColor: disabled ? _theme.colors.disabled : _theme.colors.secondary,
          paddingHorizontal: 14,
          paddingVertical: 0,
          height: 24,
          justifyContent: 'center',
          borderRadius: _theme.dimens.defaultButtonRadius
        },
  buttonTitle: (_theme: ITheme, type: 'large' | 'small', disabled: boolean): TextStyle =>
    type === 'large'
      ? {
          ..._theme.typography.subheadingText,
          color: _theme.colors.white,
          alignSelf: 'center'
        }
      : {
          ..._theme.typography.bodyText,
          color: disabled ? _theme.colors.disabled : _theme.colors.secondary,
          alignSelf: 'center'
        }
}

export { Button }

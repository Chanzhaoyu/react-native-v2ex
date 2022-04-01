/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'

import { Text, Button, Spinner, Placeholder } from '@src/components'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'

/**
 * // TODO: NodeList
 * NodeList props
 */
export interface NodeListProps {
  /**
   * NodeList width
   */
  width?: number | string

  /**
   * NodeList height
   */
  height?: number | string
}

const NodeList: React.FC<NodeListProps> = ({ width, height }: NodeListProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, NodeList.</Text>
      </View>
    )
  }

  return readerContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

export default NodeList

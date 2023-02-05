import React, { useEffect, useMemo } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface GraphBarProps {
  title: string;
  percentage: number;
  barWidth?: number;
}

const HorizontalGraphBarComponent = (props: GraphBarProps) => {
  const barPercentage = useSharedValue(0);
  const DEFAULT_BAR_WIDHT = 100;

  const getWidth = () => {
    'worklet';
    return barWidth || DEFAULT_BAR_WIDHT;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: getWidth() * (barPercentage.value / 100)
    }
  });

  const { barWidth, percentage, title } = props;

  useEffect(() => {
    barPercentage.value = withTiming(percentage, {
      duration: 1000
    });
  }, []);

  return (
    <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text> {title} </Text>
        <Text style={{ paddingLeft: 5 }}>{`(${percentage} %)`}</Text>
      </View>
      <View style={{
        overflow: "hidden",
        justifyContent: "flex-end",
        width: getWidth()
      }}>
        <View style={{
          width: getWidth(),
          height: 20,
          flexDirection: 'row',
          alignSelf: "center",
          backgroundColor: '#DADADA',
          borderRadius: 20,
          overflow: "hidden",
        }}>
          <Animated.View style={[{
            borderRadius: 20,
            backgroundColor: '#3060FF',
            width: getWidth() * (percentage / 100)
          }, animatedStyle]}>
          </Animated.View>
        </View>
      </View>
    </View >
  )
}

export default HorizontalGraphBarComponent;

import { Tabs } from '@/components/Tabs';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: () => ({ sfSymbol: 'house' }),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: () => ({ sfSymbol: 'person' }),
        }}
      />
    </Tabs>
  );
}

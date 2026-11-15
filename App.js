import React, { useState, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from './src/screens/DashboardScreen';
import ActionsScreen from './src/screens/ActionsScreen';
import ImpactScreen from './src/screens/ImpactScreen';

const Tab = createBottomTabNavigator();

const INITIAL_ECO_ACTIONS = [
  {
    id: '1',
    title: 'Membawa botol minum (tumbler) sendiri ke kampus',
    category: 'Bebas Plastik',
    co2Kg: 0.3,
    points: 15,
    completed: true,
  },
  {
    id: '2',
    title: 'Berjalan kaki atau naik angkutan umum ke tujuan dekat',
    category: 'Transportasi',
    co2Kg: 1.2,
    points: 30,
    completed: false,
  },
  {
    id: '3',
    title: 'Mematikan lampu & mencabut charger saat tidak dipakai',
    category: 'Hemat Energi',
    co2Kg: 0.5,
    points: 20,
    completed: false,
  },
  {
    id: '4',
    title: 'Menggunakan tas belanja kain pengganti kantong kresek',
    category: 'Bebas Plastik',
    co2Kg: 0.3,
    points: 15,
    completed: false,
  },
];

export default function App() {
  const [actions, setActions] = useState(INITIAL_ECO_ACTIONS);
  const [bonusPoints, setBonusPoints] = useState(0);

  const summary = useMemo(() => {
    const totalCount = actions.length;
    const completedItems = actions.filter((item) => item.completed);
    const completedCount = completedItems.length;

    const co2Total = completedItems.reduce((sum, item) => sum + item.co2Kg, 0);
    const actionPoints = completedItems.reduce((sum, item) => sum + item.points, 0);
    const totalPoints = actionPoints + bonusPoints;
    const percentage =
      totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    let ecoLevel = 'Pemula Hijau';
    if (totalPoints >= 60) ecoLevel = 'Duta Lingkungan';
    else if (totalPoints >= 30) ecoLevel = 'Pejuang Bumi';

    return {
      totalCount,
      completedCount,
      co2Saved: co2Total.toFixed(1),
      totalPoints,
      percentage,
      ecoLevel,
    };
  }, [actions, bonusPoints]);

  const handleToggleAction = (id) => {
    setActions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleAddAction = (newAction) => {
    setActions((prev) => [newAction, ...prev]);
  };

  const handleDeleteAction = (id) => {
    setActions((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClaimBonus = (pts) => {
    setBonusPoints((prev) => prev + pts);
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#070A09" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#070A09',
            borderBottomWidth: 1,
            borderBottomColor: '#1E2E26',
          },
          headerTintColor: '#4ADE80',
          headerTitleStyle: { fontWeight: '800' },
          tabBarStyle: {
            backgroundColor: '#070A09',
            borderTopColor: '#1E2E26',
          },
          tabBarActiveTintColor: '#22C55E',
          tabBarInactiveTintColor: '#64748B',
          tabBarIcon: ({ color, size }) => {
            let iconName = 'leaf-outline';
            if (route.name === 'Aksi Hijau') iconName = 'checkmark-circle-outline';
            if (route.name === 'Dampak') iconName = 'earth-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Beranda" options={{ title: 'JejakHijau' }}>
          {(props) => (
            <DashboardScreen
              {...props}
              actions={actions}
              summary={summary}
              onToggleAction={handleToggleAction}
              onClaimBonus={handleClaimBonus}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Aksi Hijau" options={{ title: 'Daftar Aksi Hijau' }}>
          {(props) => (
            <ActionsScreen
              {...props}
              actions={actions}
              onAddAction={handleAddAction}
              onToggleAction={handleToggleAction}
              onDeleteAction={handleDeleteAction}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Dampak" options={{ title: 'Dampak & Arsitektur' }}>
          {(props) => <ImpactScreen {...props} summary={summary} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
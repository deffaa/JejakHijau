import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EcoHeaderCard from '../components/EcoHeaderCard';
import EcoChallengeTimer from '../components/EcoChallengeTimer';
import EcoTipBanner from '../components/EcoTipBanner';
import EcoHabitCard from '../components/EcoHabitCard';

const GREEN_FACTS = [
  'Membawa botol minum sendiri mengurangi rata-rata 156 botol plastik sekali pakai setiap tahunnya.',
  'Mencabut charger laptop dan ponsel saat tidak digunakan mencegah konsumsi listrik standby hingga 10%.',
  'Berjalan kaki atau bersepeda untuk jarak dekat di bawah 2 km memangkas emisi karbon harian secara signifikan.',
];

export default function DashboardScreen({
  navigation,
  actions,
  summary,
  onToggleAction,
  onClaimBonus,
}) {
  const [factIdx, setFactIdx] = useState(0);

  const handleNextFact = () => {
    setFactIdx((prev) => (prev + 1) % GREEN_FACTS.length);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <EcoHeaderCard
        appName="JejakHijau"
        tagline="Langkah kecil hari ini untuk bumi yang lebih bersih"
        summary={summary}
      />

      <EcoChallengeTimer onClaimBonus={onClaimBonus} />

      <EcoTipBanner fact={GREEN_FACTS[factIdx]} onNextFact={handleNextFact} />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Aksi Hijau Hari Ini</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Aksi Hijau')}>
          <Text style={styles.seeAll}>Lihat Semua &rarr;</Text>
        </TouchableOpacity>
      </View>

      {actions.slice(0, 2).map((item) => (
        <EcoHabitCard
          key={item.id}
          item={item}
          onToggleAction={onToggleAction}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A09',
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F1F5F9',
  },
  seeAll: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4ADE80',
  },
});
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ImpactScreen({ summary }) {
  const equivalentTrees = (parseFloat(summary.co2Saved) * 0.05).toFixed(2);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Konversi Dampak Lingkunganmu</Text>
        <Text style={styles.highlight}>
          {summary.co2Saved} kg CO₂ Berhasil Dicegah
        </Text>
        <Text style={styles.body}>
          Kontribusimu saat ini setara dengan daya serap karbon harian sekitar{' '}
          <Text style={styles.bold}>{equivalentTrees} pohon dewasa</Text> serta
          mengumpulkan total <Text style={styles.bold}>{summary.totalPoints} Poin Hijau</Text>.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Implementasi Teknis React Native</Text>
        <Text style={styles.listItem}>
          • 5 Komponen Reusable: EcoHeaderCard, EcoChallengeTimer, EcoHabitCard, AddEcoActionForm, dan EcoTipBanner.
        </Text>
        <Text style={styles.listItem}>
          • State & Props: State daftar aksi ({summary.totalCount} item) dan poin bonus dikelola di App.js lalu dikirim lewat props ke semua halaman.
        </Text>
        <Text style={styles.listItem}>
          • React Hooks: Menggunakan useState, useEffect (interval tantangan hemat listrik), dan useMemo (kalkulasi otomatis kg CO₂ & level).
        </Text>
        <Text style={styles.listItem}>
          • Navigasi: React Navigation Bottom Tabs (Beranda, Aksi Hijau, Dampak).
        </Text>
      </View>
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
  },
  card: {
    backgroundColor: '#101714',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1E2E26',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F1F5F9',
    marginBottom: 8,
  },
  highlight: {
    fontSize: 20,
    fontWeight: '800',
    color: '#4ADE80',
    marginBottom: 8,
  },
  body: {
    fontSize: 13,
    color: '#CBD5E1',
    lineHeight: 20,
  },
  bold: {
    fontWeight: '700',
    color: '#4ADE80',
  },
  listItem: {
    fontSize: 13,
    color: '#CBD5E1',
    lineHeight: 20,
    marginBottom: 6,
  },
});
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EcoTipBanner({ fact, onNextFact }) {
  return (
    <View style={styles.banner}>
      <View style={styles.topRow}>
        <Text style={styles.label}>Fakta & Tips Hijau</Text>
        <TouchableOpacity onPress={onNextFact}>
          <Text style={styles.nextBtn}>Ganti Tips &rarr;</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.factText}>{fact}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#0B1F16',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#166534',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
    color: '#4ADE80',
  },
  nextBtn: {
    fontSize: 12,
    fontWeight: '700',
    color: '#86EFAC',
  },
  factText: {
    fontSize: 13,
    color: '#D1FAE5',
    lineHeight: 19,
  },
});
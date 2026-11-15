import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EcoHeaderCard({ appName, tagline, summary }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>{appName}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{summary.ecoLevel}</Text>
        </View>
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>{summary.co2Saved} kg</Text>
          <Text style={styles.metricLabel}>Emisi CO₂ Dicegah</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>{summary.totalPoints} pts</Text>
          <Text style={styles.metricLabel}>Poin Hijau</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>
            {summary.completedCount}/{summary.totalCount}
          </Text>
          <Text style={styles.metricLabel}>Aksi Selesai</Text>
        </View>
      </View>

      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${summary.percentage}%` }]} />
      </View>
      <Text style={styles.progressCaption}>
        Target Harian Tercapai: {summary.percentage}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#101714',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#15803D',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  titleWrap: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#4ADE80',
  },
  tagline: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
  levelBadge: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  levelText: {
    color: '#031A0E',
    fontSize: 11,
    fontWeight: '800',
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  metricBox: {
    backgroundColor: '#070A09',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: '31.5%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E2E26',
  },
  metricValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#4ADE80',
  },
  metricLabel: {
    fontSize: 10,
    color: '#CBD5E1',
    marginTop: 3,
    textAlign: 'center',
  },
  barTrack: {
    height: 8,
    backgroundColor: '#070A09',
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1E2E26',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#22C55E',
    borderRadius: 999,
  },
  progressCaption: {
    fontSize: 11,
    color: '#86EFAC',
    marginTop: 6,
    textAlign: 'right',
    fontWeight: '600',
  },
});
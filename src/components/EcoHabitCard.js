import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EcoHabitCard({ item, onToggleAction, onDeleteAction }) {
  return (
    <View style={[styles.card, item.completed && styles.cardCompleted]}>
      <View style={styles.headerRow}>
        <Text style={styles.categoryTag}>{item.category}</Text>
        <Text style={styles.impactTag}>
          -{item.co2Kg} kg CO₂ • +{item.points} pts
        </Text>
      </View>

      <Text style={[styles.title, item.completed && styles.titleCompleted]}>
        {item.title}
      </Text>

      <View style={styles.footerRow}>
        <TouchableOpacity
          style={[styles.actionBtn, item.completed ? styles.btnUndo : styles.btnDone]}
          onPress={() => onToggleAction(item.id)}
        >
          <Text
            style={[
              styles.actionBtnText,
              item.completed && styles.btnUndoText,
            ]}
          >
            {item.completed ? 'Tercatat ✓' : 'Tandai Dilakukan'}
          </Text>
        </TouchableOpacity>

        {onDeleteAction && (
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => onDeleteAction(item.id)}
          >
            <Text style={styles.deleteBtnText}>Hapus</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#101714',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1E2E26',
  },
  cardCompleted: {
    backgroundColor: '#0B1F16',
    borderColor: '#22C55E',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  categoryTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6EE7B7',
    backgroundColor: '#052E16',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  impactTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#F1F5F9',
    marginBottom: 10,
  },
  titleCompleted: {
    color: '#86EFAC',
  },
  footerRow: {
    flexDirection: 'row',
  },
  actionBtn: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginRight: 8,
  },
  btnDone: {
    backgroundColor: '#22C55E',
  },
  btnUndo: {
    backgroundColor: '#143324',
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  actionBtnText: {
    color: '#031A0E',
    fontSize: 12,
    fontWeight: '800',
  },
  btnUndoText: {
    color: '#4ADE80',
  },
  deleteBtn: {
    backgroundColor: '#2A1215',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7F1D1D',
  },
  deleteBtnText: {
    color: '#FCA5A5',
    fontSize: 12,
    fontWeight: '700',
  },
});
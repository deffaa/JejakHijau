import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AddEcoActionForm from '../components/AddEcoActionForm';
import EcoHabitCard from '../components/EcoHabitCard';

export default function ActionsScreen({
  actions,
  onAddAction,
  onToggleAction,
  onDeleteAction,
}) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredActions = actions.filter((item) => {
    if (selectedCategory === 'Semua') return true;
    return item.category === selectedCategory;
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <AddEcoActionForm onAddAction={onAddAction} />

      <View style={styles.filterRow}>
        {['Semua', 'Bebas Plastik', 'Hemat Energi', 'Transportasi'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.filterChip,
              selectedCategory === cat && styles.filterChipActive,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === cat && styles.filterTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {filteredActions.length === 0 ? (
        <Text style={styles.emptyMsg}>Belum ada aksi pada kategori ini.</Text>
      ) : (
        filteredActions.map((item) => (
          <EcoHabitCard
            key={item.id}
            item={item}
            onToggleAction={onToggleAction}
            onDeleteAction={onDeleteAction}
          />
        ))
      )}
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
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  filterChip: {
    backgroundColor: '#101714',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 6,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#1E2E26',
  },
  filterChipActive: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  filterText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
  },
  filterTextActive: {
    color: '#031A0E',
    fontWeight: '800',
  },
  emptyMsg: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 24,
    fontSize: 14,
  },
});
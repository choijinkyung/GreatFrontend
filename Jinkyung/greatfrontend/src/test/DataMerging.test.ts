import '../solutions/DataMerging/DataMerging';

describe('mergeData', () => {
    it('merges sessions by user correctly', () => {
        const sessions = [
            { user: 8, duration: 50, equipment: ['bench'] },
            { user: 7, duration: 150, equipment: ['dumbbell'] },
            { user: 1, duration: 10, equipment: ['barbell'] },
            { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
            { user: 7, duration: 200, equipment: ['bike'] },
            { user: 2, duration: 200, equipment: ['treadmill'] },
            { user: 2, duration: 200, equipment: ['bike'] },
        ];

        const result = mergeData(sessions);

        expect(result).toEqual([
            { user: 8, duration: 50, equipment: ['bench'] },
            { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
            { user: 1, duration: 10, equipment: ['barbell'] },
            { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
        ]);
    });

    it('does not mutate the original input', () => {
        const sessions = [
            { user: 1, duration: 30, equipment: ['barbell'] },
            { user: 1, duration: 20, equipment: ['bench'] },
        ];

        const originalCopy = JSON.parse(JSON.stringify(sessions));
        mergeData(sessions);

        expect(sessions).toEqual(originalCopy); // input must stay unchanged
    });

    it('handles a single session', () => {
        const sessions = [
            { user: 5, duration: 40, equipment: ['bike'] },
        ];

        expect(mergeData(sessions)).toEqual([
            { user: 5, duration: 40, equipment: ['bike'] },
        ]);
    });

    it('handles empty input', () => {
        expect(mergeData([])).toEqual([]);
    });

    it('correctly de-duplicates equipment', () => {
        const sessions = [
            { user: 3, duration: 10, equipment: ['barbell'] },
            { user: 3, duration: 20, equipment: ['barbell', 'bench'] },
            { user: 3, duration: 20, equipment: ['bench'] },
        ];

        expect(mergeData(sessions)).toEqual([
            { user: 3, duration: 50, equipment: ['barbell', 'bench'] },
        ]);
    });

    it('keeps output order based on first appearance', () => {
        const sessions = [
            { user: 3, duration: 10, equipment: ['bench'] },
            { user: 1, duration: 10, equipment: ['barbell'] },
            { user: 3, duration: 10, equipment: ['bike'] },
            { user: 2, duration: 10, equipment: ['treadmill'] },
            { user: 1, duration: 10, equipment: ['dumbbell'] },
        ];

        const result = mergeData(sessions);

        expect(result.map((s) => s.user)).toEqual([3, 1, 2]); // order must match first occurrence
    });
});
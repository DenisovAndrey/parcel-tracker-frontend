import api from './rootService';
import { Checkpoint } from '../types/Checkpoint';
import { CheckpointsPaths } from './paths/CheckpointsPaths';

export const checkpointsService = {
  async getCheckpoints(trackingNumber: string): Promise<Checkpoint[]> {
    const res = await api.get<{ checkpoints: Checkpoint[]; }>(`${CheckpointsPaths.ROOT}/${trackingNumber}`);
    return res.data.checkpoints;
  },
};

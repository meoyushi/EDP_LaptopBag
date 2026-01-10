import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useBagStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    let mounted = true;
    api.get('/bag/status').then((res) => {
      if (mounted) setStatus(res.data);
    }).catch(() => {});
    return () => { mounted = false; };
  }, []);

  return status;
}

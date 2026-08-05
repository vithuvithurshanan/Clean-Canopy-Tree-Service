import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAGYzVLGBhnj0Lb7UhxtEdc7h0_ROZmP-U',
  authDomain: 'clean-canopy-tree-service.firebaseapp.com',
  projectId: 'clean-canopy-tree-service',
  storageBucket: 'clean-canopy-tree-service.firebasestorage.app',
  messagingSenderId: '900930177008',
  appId: '1:900930177008:web:caf5806d5886ca34e43f35',
  measurementId: 'G-Q3MB1E89RD',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export default app

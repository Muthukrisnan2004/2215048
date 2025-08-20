export default function Logger({ message }) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Log:`, message);
  
  // Add debugging info
  console.group('Debug Info');
  console.log('URLs:', JSON.parse(localStorage.getItem('urls')));
  console.log('Stats:', JSON.parse(localStorage.getItem('stats')));
  console.groupEnd();
  
  return null;
}

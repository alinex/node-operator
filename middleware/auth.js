export default function ({ store, redirect }) {
  // If user not connected, redirect to /login
  if (!store.state.authUser) {
    return redirect('/login')
  }
}

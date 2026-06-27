// Replaces the old Vuex store: global UI toggles for the mobile drawer and search popup.
export function useUiState() {
  const mobileDrawer = useState<boolean>("mobileDrawer", () => false)
  const searchPopup = useState<boolean>("searchPopup", () => false)

  const toggleMobileDrawer = () => {
    mobileDrawer.value = !mobileDrawer.value
  }
  const toggleSearchPopup = () => {
    searchPopup.value = !searchPopup.value
  }

  return { mobileDrawer, searchPopup, toggleMobileDrawer, toggleSearchPopup }
}

const svgPaths = {
  mal: "M8.273 7.247v8.423l-2.103-.003v-5.216l-2.03 2.404l-1.989-2.458l-.02 5.285H.001L0 7.247h2.203l1.865 2.545l2.015-2.546l2.19.001zm8.628 2.069l.025 6.335h-2.365l-.008-2.871h-2.8c.07.499.21 1.266.417 1.779c.155.381.298.751.583 1.128l-1.705 1.125c-.349-.636-.622-1.337-.878-2.082a9.296 9.296 0 0 1-.507-2.179c-.085-.75-.097-1.471.107-2.212a3.908 3.908 0 0 1 1.161-1.866c.313-.293.749-.5 1.1-.687c.351-.187.743-.264 1.107-.359a7.405 7.405 0 0 1 1.191-.183c.398-.034 1.107-.066 2.39-.028l.545 1.749H14.51c-.593.008-.878.001-1.341.209a2.236 2.236 0 0 0-1.278 1.92l2.663.033l.038-1.81h2.309zm3.992-2.099v6.627l3.107.032l-.43 1.775h-4.807V7.187l2.13.03z",
  twitter: "M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z",
  github:
    "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z",
  reddit:
    "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12Zm-4.312-.942c.194.277.304.604.316.942a1.751 1.751 0 0 1-.972 1.596c.014.176.014.352 0 .528c0 2.688-3.132 4.872-6.996 4.872c-3.864 0-6.996-2.184-6.996-4.872a3.444 3.444 0 0 1 0-.528a1.75 1.75 0 1 1 1.932-2.868a8.568 8.568 0 0 1 4.68-1.476l.888-4.164a.372.372 0 0 1 .444-.288l2.94.588a1.2 1.2 0 1 1-.156.732L13.2 5.58l-.78 3.744a8.544 8.544 0 0 1 4.62 1.476a1.751 1.751 0 0 1 2.648.258ZM8.206 12.533a1.2 1.2 0 1 0 1.996 1.334a1.2 1.2 0 0 0-1.996-1.334Zm3.806 4.891c1.065.044 2.113-.234 2.964-.876a.335.335 0 1 0-.468-.48A3.936 3.936 0 0 1 12 16.8a3.924 3.924 0 0 1-2.496-.756a.324.324 0 0 0-.456.456a4.608 4.608 0 0 0 2.964.924Zm2.081-3.178c.198.132.418.25.655.25a1.199 1.199 0 0 0 1.212-1.248a1.2 1.2 0 1 0-1.867.998Z",
  githubAlt:
    "M1078.94-.985c-33.192-.491-110.295 10.777-239.027 96.936c-70.161-17.535-144.812-26.188-219.591-26.188c-82.278 0-165.425 10.448-242.965 31.719C192.534-24.605 110.955 1.234 110.955 1.234c-53.258 133.183-20.347 231.788-10.344 256.277C38.014 325.069-.2 411.338-.2 517.07c0 79.822 9.085 151.416 31.281 213.653c1.231 4.803.832 3.732 2.906 7.844c4.89 12.884 10.327 25.39 16.438 37.468c2.094 4.346 4 7.563 4 7.563c62.395 116.307 185.396 191.438 404.244 215.028l330.995.375c233.392-23.144 345.386-98.499 396.994-215.591l3.281-7.625c4.89-11.828 9.153-24.135 20.813-65.562c11.659-41.427 16.875-113.172 16.875-193.185c0-114.755-43.1-206.577-113.092-276.434c12.231-39.48 28.57-127.158-16.313-239.402c0 0-6.293-1.995-19.281-2.188zM818.1 420.133c53.893-.117 100.057 9.136 134.717 45.499v.031c43.369 45.541 68.749 100.525 68.749 159.778c0 276.658-177.932 284.183-397.4 284.183c-219.506 0-397.4-38.336-397.4-284.183c0-58.861 25.009-113.516 67.843-158.872c71.451-75.59 192.365-35.562 329.558-35.562c70.423-.011 136.564-10.75 193.935-10.875zm-408.807 81.468c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936zm443.649 0c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936z",
  envelope:
    "M15.448 7.021c2.443 0 4.745 1.083 6.432 2.776v.005c0-.813.547-1.428 1.303-1.428h.192c1.193 0 1.432 1.125 1.432 1.48l.005 12.635c-.083.828.855 1.256 1.376.724c2.025-2.083 4.452-10.719-1.261-15.719c-5.328-4.667-12.479-3.896-16.281-1.276c-4.041 2.792-6.624 8.959-4.115 14.755c2.74 6.319 10.573 8.204 15.235 6.324c2.36-.953 3.448 2.233.995 3.276c-3.697 1.577-14 1.416-18.812-6.917C-1.302 18.027-1.13 8.125 7.496 2.995C14.089-.932 22.788.156 28.032 5.631c5.48 5.729 5.163 16.448-.187 20.615c-2.423 1.895-6.021.052-5.995-2.709l-.027-.9c-1.687 1.671-3.932 2.651-6.375 2.651c-4.833 0-9.088-4.256-9.088-9.084c0-4.88 4.255-9.181 9.088-9.181zm6.079 8.834c-.183-3.537-2.808-5.667-5.98-5.667h-.12c-3.656 0-5.687 2.88-5.687 6.145c0 3.661 2.453 5.973 5.672 5.973c3.593 0 5.952-2.629 6.124-5.739z",
  discord:
    "M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0a12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20.03 20.03 0 0 0 5.993 2.98a.078.078 0 0 0 .084-.026a13.83 13.83 0 0 0 1.226-1.963a.074.074 0 0 0-.041-.104a13.201 13.201 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-2.981a.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38Z",
};

export default svgPaths;

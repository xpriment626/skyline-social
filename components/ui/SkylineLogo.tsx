interface SkylineLogoProps {
  className?: string;
}

export function SkylineLogo({ className = "w-6 h-6" }: SkylineLogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      {/* City skyline silhouette - clean and minimal */}
      <path d="M2 20h2v-6h2v-2h2v-4h2v-2h2V4h2v2h2v4h2v2h2v6h2v2H2v-2z"/>
      {/* Building details */}
      <rect x="3" y="16" width="1" height="4"/>
      <rect x="6" y="14" width="1" height="6"/>
      <rect x="9" y="10" width="1" height="10"/>
      <rect x="12" y="8" width="1" height="12"/>
      <rect x="15" y="6" width="1" height="14"/>
      <rect x="18" y="12" width="1" height="8"/>
      <rect x="21" y="14" width="1" height="6"/>
    </svg>
  );
}
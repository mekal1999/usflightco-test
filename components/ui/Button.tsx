export function Button({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {children}
    </button>
  )
}
```

5. **Save the file:** Press `Ctrl+S`

---

### Step 5: Verify Your Structure

Your Explorer should now show:
```
usflightco-test/
├── app/
├── components/
│   └── ui/
│       ├── Button.tsx    ✓
│       └── Card.tsx      ✓
├── public/
└── package.json
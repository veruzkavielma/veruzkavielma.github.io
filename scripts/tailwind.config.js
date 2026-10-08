        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        darkbg: '#17131F',
                        cardbg: '#211A2B'
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'float-reverse': 'floatReverse 7s ease-in-out infinite',
                        'profile-float': 'profileFloat 5s ease-in-out infinite',
                        'gradient-move': 'gradientMove 12s ease infinite',
                        'particle': 'particleFloat linear infinite'
                    },
                    keyframes: {
                        float: {
                            '0%,100%': { transform: 'translateY(0px) scale(1)' },
                            '50%': { transform: 'translateY(-20px) scale(1.05)' }
                        },
                        floatReverse: {
                            '0%,100%': { transform: 'translateY(0px) scale(1)' },
                            '50%': { transform: 'translateY(20px) scale(0.95)' }
                        },
                        profileFloat: {
                            '0%,100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-12px)' }
                        },
                        gradientMove: {
                            '0%': { backgroundPosition: '0% 50%' },
                            '50%': { backgroundPosition: '100% 50%' },
                            '100%': { backgroundPosition: '0% 50%' }
                        },
                        particleFloat: {
                            '0%': { transform: 'translateY(100vh) translateX(0)' },
                            '100%': { transform: 'translateY(-120px) translateX(80px)' }
                        }
                    }
                }
            }
        }


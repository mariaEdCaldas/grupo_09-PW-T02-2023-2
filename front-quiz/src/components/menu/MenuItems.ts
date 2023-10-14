type MenuItem = {
    label: string;
    path: string;
};

const unloggedItems = [
    {
        label: "Login",
        path: "/login",
    },
    {
        label: "Registrar",
        path: "/registrar",
    },
];

const loggedItems = [
    {
        label: "Jogar",
        path: "/",
    },
    {
        label: "Ranking",
        path: "/ranking",
    },
    {
        label: "Criar Quiz",
        path: "/create-quiz",
    }
]

export { type MenuItem, loggedItems, unloggedItems };

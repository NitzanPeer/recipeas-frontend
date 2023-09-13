<template>
    <nav class="navbar">
        <ul class="router-links clean-list">
            <li>
                <RouterLink to="/">דף הבית</RouterLink>
            </li>
            <li>
                <RouterLink to="">קטגוריות</RouterLink>
            </li>
            <li>
                <RouterLink to="">עליי</RouterLink>
            </li>
        </ul>
        <div class="search-container">
            <span class="material-symbols-outlined icon">search</span>
            <input type="text" placeholder="חפשו מתכון">
        </div>

        <div class="left-side-container">
            <h1>שמחים שחזרת "משתמש/ת"</h1>
        </div>
    </nav>
</template>

<script>

export default {
}

</script>

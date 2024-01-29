<template>
    <section class="about-container">
        <h2 class="about-header">אז מי אני?</h2>
        <div v-html="formattedParagraphs"></div>
        <br>
        <h2 class="about-contact">אשמח לפידבק מכל סוג - prnitzan@gmail.com</h2>
    </section>
</template>

<script>

export default {
    data() {
        return {
            paragraph:
                `Hey there, fellow foodies!
                I'm Nitzan, the culinary tech enthusiast who's as passionate about coding as I am about creating
                delightful dishes.This recipe app you're using? Well, it's my brainchild – a digital haven I envisioned to
                revolutionize the way we manage our recipes.

                My journey into this world of programming and cooking started at the intersection of my love for technology and the
                culinary arts.I often found myself scribbling recipes on scraps of paper or scrolling through endless bookmarks for
                that one perfect dish.That's when I thought, 'There's got to be a better way.'

                Driven by this need for efficiency and fueled by my obsession with both cooking and coding, I embarked on a mission.
                I wanted to build a platform that simplifies the lives of food enthusiasts like you and me.Thus, this app was born.

                Every line of code, every feature, and every update you see here is a result of countless hours of dedication.I'm
                not just a programmer; I'm someone who understands the joy of discovering a new recipe and the frustration of losing
                it in a sea of papers or bookmarks.

                I aimed to create an app that's not just functional but also a joy to use. It's designed to seamlessly organize,
                store, and help you discover new culinary adventures.From the sleek interface to the behind - the - scenes algorithms,
                every aspect has been carefully crafted to make your cooking experience smoother.

                But beyond the codes and pixels, I'm just like you – someone who loves experimenting in the kitchen, exploring new
                flavors, and cherishing the joy that sharing a meal brings.This app reflects not just my expertise but also my
                genuine passion for cooking.

                So, welcome to this flavorful journey! I'm thrilled to have you here and excited to keep enhancing this app, making
                it the ultimate companion for your kitchen escapades.

                Here's to creating, savoring, and sharing amazing recipes together!

                Happy cooking,
                            Nitzan`,
            paragraphHeb:
                            `טקסט דוגמה של ג'יפיטי כפלייסהולדר: שלום לכם, אוהבי האוכל!
                אני ניצן, אנשי הטכנולוגיה הקולינרי שמיוחד בתשוקה כפולה - לתכנות וליצירת מנות טעימות. האפליקציה למתכונים שאתם משתמשים בה? זה ההמצאה שלי - מקום דיגיטלי שחלמתי עליו כדי לשנות את דרך הניהול שלנו של המתכונים.

                המסע שלי לתחום התכנות והבישול התחיל בצומת של אהבתי לטכנולוגיה ולאומנות הבישול. לעיתים תמיד מצאתי את עצמי כותב מתכונים על גבי פתקים או גולל בהמון סימניות למתכון המושלם הזה. וזהו שחשבתי לעצמי, 'צריך להיות דרך טובה יותר'.

                מופעל בצורך הזה ליעילות ומתוך הטבעה של עצמי בעולם הבישול והתכנות, נסעתי במסע. רציתי לבנות פלטפורמה שתפשט את החיים של אנשי אוכל כמוני וכמוך. וכך נוצרה האפליקציה הזו.

                כל שורת קוד, כל יכולת, וכל עדכון שאתם רואים כאן הם תוצאה של שעות לא ספורות של הקדשה. אני לא רק מתכנת, אלא גם אדם שמבין את השמחה שבגילוי של מתכון חדש ואת הפספוס הכואב בים של ניירות או סימניות.

                כוונתי הייתה ליצור אפליקציה שאיננה רק פונקציונלית אלא גם כיף לשימוש. היא מותאמת לארגן, לאחסן, ולעזור לך לגלות הרפתקאות בישול חדשות. מממשק החלק לאלגוריתמים העובדים מאחורי הקלעים, כל רכיב הוא תוצר שנעשה בקפידה כדי להפוך את חוויית הבישול שלך לקלה יותר.

                אבל מעבר לקודים ולפיקסלים, אני פשוט כמוך - אדם שאוהב לנסות במטבח, לגלות טעמים חדשים, ולשמור על השמחה שבשיתוף ארוחה. האפליקציה הזו משקפת לא רק את המומחיות שלי אלא גם את התשוקה האמיתית שלי לבישול.

                אז, ברוכים הבאים למסע הטעים הזה! אני מתרגש לאזור אתכם כאן ומתרגש להמשיך לשדרג את האפליקציה הזו, ולהפוך אותה למלווה האולטימטיבי להתחברות עם המטבח שלכם.

                לבריאות!
                ניצן`
        }
    },
    computed: {
        formattedParagraphs() {
          return this.paragraphHeb.split('\n\n').map((para) => `<br><p>${para}</p>`).join('');
        }
    }
}

</script>



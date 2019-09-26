<template>
    <div class="contacts">
        <div class="container">
            <div class="row">
                <div class="col col--6">
                    <div class="contacts-section">
                        <div class="title title--section">GMS Headquarters</div>
                        <div class="contacts-grid">
                            <div class="contacts-cell">
                                <div class="contacts-text">
                                    Global Message Services Ukraine LLC <br>
                                    Bundesstrasse 5 | 3rd Floor <br>
                                    6300 Zug <br>
                                    Switzerland
                                </div>
                                <div class="contacts-tel">
                                    <a href="tel:+41415446200" class="contacts-tel__link">+41 41 544 62 00</a>
                                </div>
                            </div>
                            <div class="contacts-cell">
                                <ul class="contacts-ul">
                                    <li class="contacts-li">
                                        <div class="contacts-li__caption">Email</div>
                                        <a href="mailto:info@gms-worldwide.com" class="contacts-li__link">
                                            info@gms-worldwide.com
                                        </a>
                                    </li>
                                    <li class="contacts-li">
                                        <div class="contacts-li__caption">Send message</div>
                                        <a href="viber://chat?number=+41415446200" class="contacts-li__link">
                                            Viber us
                                        </a>
                                    </li>
                                    <li class="contacts-li">
                                        <div class="contacts-li__caption">Send form</div>
                                        <a href="#" v-scroll-to="{el: '#contacts-us', offset: 40}"
                                           class="contacts-li__link">
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col--6">
                    <div class="contacts-section contacts-section--pl">
                        <div class="title title--section">Technical support 24/7</div>
                        <div class="contacts-text">
                            GMS understand that it can be hard to follow all new technologies. We regularly
                            provide for all our clients educational training to make your operator’s business
                            earn more and better though our best practices.
                        </div>
                        <div class="contacts-tel">
                            <a href="tel:+41415446200" class="contacts-tel__link">+41 41 544 62 00</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contacts {
        margin-bottom: em(70);
        @include media($screen-def) {
            margin-bottom: em(90);
        }
    }

    .contacts-section {
        &--pl {
            @include media($screen-md) {
                padding-left: em(30);
                @include media($screen-def) {
                    padding-left: em(70);
                }
            }
        }

        a {
            text-decoration: none;
            transition: color 0.2s ease;

            &:hover {
                color: $theme-color-1;
            }
        }
    }

    .contacts-grid {
        display: flex;
        flex-flow: row wrap;
        @include media($screen-sm) {
            margin-left: em(-20);
        }
    }

    .contacts-cell {
        margin-bottom: em(40);
        @include media($screen-sm) {
            padding-left: em(20);
            width: 49%;
        }
    }

    .contacts-text {
        font-size: em(20);
        line-height: 1.8;
        margin-bottom: rem(40);
        @include media($screen-def) {
            font-size: em(22);
            line-height: 1.98;
        }
    }

    .contacts-tel {
        font-size: em(34);
        line-height: 1;
        @include media($screen-def) {
            font-size: em(38);
        }

        &__link {
            color: $black;
        }
    }

    .contacts-ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .contacts-li {
        margin-bottom: rem(15);
        font-size: em(20);
        @include media($screen-def) {
            font-size: em(22);
        }

        &__caption {
            line-height: 1.5;
            margin-bottom: 1rem;
        }

        &__link {
            color: $theme-color-4;
            text-transform: uppercase;
            line-height: 1;
        }
    }
</style>

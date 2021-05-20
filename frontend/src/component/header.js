import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5c99fa',
    },
    headerText: {
        fontSize: '2em',
        padding: '8px 24px',
        margin: '0',
    },
});

function Header() {
    return (
        <div className={css(styles.header)}>
            <h4 className={css(styles.headerText)}>DesArt</h4>
        </div>
    );
}

export default Header;
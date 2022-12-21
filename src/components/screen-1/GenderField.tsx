export const GenderField = (props) => {
    return (
        <div>
            <label htmlFor="gender-male">Male</label>
            <input type="radio" id="gender-male" value="male" />
            <label htmlFor="gender-female">Female</label>
            <input type="radio" id="gender-female" value="female" />
            <label htmlFor="gender-other">Other</label>
            <input type="radio" id="gender-other" value="other" />
            <label htmlFor="gender-prefer-not-to-mention">
                Prefer not to mention
            </label>
            <input
                type="radio"
                id="gender-prefer-not-to-mention"
                value="prefer-not-to-mention"
            />
        </div>
    );
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
export class AnimationStyleNormalizer {
}
/**
 * @publicApi
 */
export class NoopAnimationStyleNormalizer {
    normalizePropertyName(propertyName, errors) {
        return propertyName;
    }
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3N0eWxlX25vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOztHQUVHO0FBQ0gsTUFBTSxPQUFnQix3QkFBd0I7Q0FLN0M7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyw0QkFBNEI7SUFDdkMscUJBQXFCLENBQUMsWUFBb0IsRUFBRSxNQUFlO1FBQ3pELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQkFBbUIsQ0FDZixvQkFBNEIsRUFBRSxrQkFBMEIsRUFBRSxLQUFvQixFQUM5RSxNQUFlO1FBQ2pCLE9BQVksS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciB7XG4gIGFic3RyYWN0IG5vcm1hbGl6ZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZXJyb3JzOiBFcnJvcltdKTogc3RyaW5nO1xuICBhYnN0cmFjdCBub3JtYWxpemVTdHlsZVZhbHVlKFxuICAgICAgdXNlclByb3ZpZGVkUHJvcGVydHk6IHN0cmluZywgbm9ybWFsaXplZFByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVtYmVyLFxuICAgICAgZXJyb3JzOiBFcnJvcltdKTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIE5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIge1xuICBub3JtYWxpemVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGVycm9yczogRXJyb3JbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgfVxuXG4gIG5vcm1hbGl6ZVN0eWxlVmFsdWUoXG4gICAgICB1c2VyUHJvdmlkZWRQcm9wZXJ0eTogc3RyaW5nLCBub3JtYWxpemVkUHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZ3xudW1iZXIsXG4gICAgICBlcnJvcnM6IEVycm9yW10pOiBzdHJpbmcge1xuICAgIHJldHVybiA8YW55PnZhbHVlO1xuICB9XG59XG4iXX0=